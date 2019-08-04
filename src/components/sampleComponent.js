import React, { Component } from 'react'
import MuuriGrid from 'react-muuri';
import './../MuuriGrid.css';

import { Grid, Cell} from 'react-mdl';

import chroma from 'chroma-js';
import Select from 'react-select';

import CustomBanners from './customBanners';

var sortOrder = 'descending';

const colourOptions = [
  { value: '', label: 'Choose', color: 'black'},
  { value: 'achievement', label: 'LeaderShip', color: '#00B8D9' ,isFixed: true},
  { value: 'apps-android', label: 'Android Apps', color: '#0052CC'},//isDisabled: true 
  { value: 'apps-windowsPhone', label: 'Windows Phone Apps', color: '#5243AA' },
  { value: 'apps-windows10', label: 'Windows 10 Apps', color: '#FF5630' },//, isFixed: true
  { value: 'programming-lang', label: 'Programming Language', color: '#FF8B00' },
  { value: 'programming-tools', label: 'Development Tools', color: '#FFC400' }
];

const sortOptions = [
  { value: 'data-title', label: 'Title' },
  { value: 'data-year', label: 'Year' }
]

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});


const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

class SampleComponent extends Component {

  constructor () {
    super();

    this.state = {
      selectedOptionFilter: null,
      selectedOptionSort:null
    };

    this.sorting = this.sorting.bind(this);

    this.filtering = this.filtering.bind(this);
  }


  handleChangeFilter = selectedOptionFilter => {
    this.setState({ selectedOptionFilter });
    //console.log(`Option selected:`, selectedOption);

    this.filtering(selectedOptionFilter.value);
    
  };

  handleChangeSort = selectedOptionSort => {
    this.setState({ selectedOptionSort });

    this.sorting(selectedOptionSort.value);
    
  };


  componentDidMount () {
    this.grid = new MuuriGrid({
      node: this.gridElement,
      defaultOptions: {
        dragEnabled: true // See Muuri's documentation for other option overrides.
      },
    });

    // An example of how to use `getEvent()` to make `synchronize()` update the grid.
    this.grid.getEvent('dragEnd');

  }

  componentWillUnmount () {
    this.grid.getMethod('destroy'); // Required: Destroy the grid when the component is unmounted.
  }

  sorting(option){
    if (this.gridElement && this.gridElement.children.length) {
      if(sortOrder == 'descending'){
        sortOrder = 'ascending';
        this.grid.getMethod('sort',this.compareItemColor);
      }else{
        sortOrder = 'descending';
        this.grid.getMethod('sort',this.compareItemColor,true);
      }
    }
  }

  filtering(option){
    let setClasserName = "."+option;
    if (this.gridElement && this.gridElement.children.length) {
      this.grid.getMethod('filter',setClasserName);
    }
  }


  compareItemColor(a, b) {
    var aVal = a.getElement().getAttribute('data-color') || '';
    var bVal = b.getElement().getAttribute('data-color') || '';
    if(sortOrder == 'descending'){
      return aVal < bVal ? -1 :  1;
    }else{
      return aVal > bVal ? -1 :  1;
    }
  }

  render () {

    const { selectedOptionFilter,selectedOptionSort } = this.state;

    return (
      <div>
        {/* Assign a ref to the grid container so the virtual DOM will ignore it for now (WIP). */}
        <div ref={gridElement => this.gridElement = gridElement}>
          {/* Required: `item` and `item-content` classNames */}

          <div style={{width: '50%', margin: 'auto'}}>
            
            
            <Grid>
              <Cell col={6}>
                <Select 
                  className="dropdownOpt"
                  defaultValue={colourOptions[0]}
                  label="Filterer"
                  options={colourOptions}
                  styles={colourStyles}
                  onChange={this.handleChangeFilter}
                />
              </Cell>
              <Cell col={6}>
                <Select 
                  className="dropdownOpt"
                  defaultValue={sortOptions[0]}
                  label="Sorter"
                  options={sortOptions}
                  onChange={this.handleChangeSort}
                />  
              </Cell>
            </Grid>

          </div>


            {/* Developer Programs */}
            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="Microsoft Student Partner's" dataYear="2013"/>

            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="National Entrepreneurship Network" dataYear="2012"/>

            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="RoboGyan" dataYear="2013"/>

            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="IEEE" dataYear="2013"/>

            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="Mozilla Student Ambassador" dataYear="2013"/>

            <CustomBanners dataColor="#00B8D9" dataTitle="achievement" dataHeader="Nokia Asha Premium Developer" dataYear="2013"/>

            {/* Apps Developed */}
            <CustomBanners dataColor="#0052CC" dataTitle="apps-android" dataHeader="UrgeBlood" dataYear="2016"/>

            <CustomBanners dataColor="#0052CC" dataTitle="apps-android" dataHeader="Mind Reader" dataYear="2013"/>

            <CustomBanners dataColor="#5243AA" dataTitle="apps-windowsPhone" dataHeader="Mind Reader" dataYear="2013"/>

            <CustomBanners dataColor="#FF5630" dataTitle="apps-windows10" dataHeader="Mind Reader" dataYear="2014"/>

            {/* Programming Languages */}
            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="JQuery" dataYear="2019"/>

            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="SharePoint" dataYear="2019"/>

            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="ReactJS" dataYear="2019"/>

            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="KnockoutJS" dataYear="2019"/>

            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="Java" dataYear="2013"/>

            <CustomBanners dataColor="#FF8B00" dataTitle="programming-lang" dataHeader="C#" dataYear="2019"/>

            {/* Developer Tools */}

            <CustomBanners dataColor="#FFC400" dataTitle="programming-tools" dataHeader="Android Studio" dataYear="2016"/>

            <CustomBanners dataColor="#FFC400" dataTitle="programming-tools" dataHeader="Visual Studio" dataYear="2019"/>

            <CustomBanners dataColor="#FFC400" dataTitle="programming-tools" dataHeader="Visual Studio Code" dataYear="2019"/>

            <CustomBanners dataColor="#FFC400" dataTitle="programming-tools" dataHeader="Marmalade" dataYear="2013"/>
          

        </div>

      </div>
    )
  }
}

export default SampleComponent;