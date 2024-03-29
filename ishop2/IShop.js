﻿var IShop = React.createClass({

  displayName: 'IShop',

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    listProducts: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        price: React.PropTypes.number,
        url: React.PropTypes.string,
        code: React.PropTypes.number,
        count: React.PropTypes.number,
      })
    ),
  },

  getInitialState: function() {
    return { arrGoods: this.props.listProducts,
      colnames: [
        {col:1, name:'Name'},
        {col:2, name:'Price'},
        {col:3, name:'URL'},
        {col:4, name:'Quantity'},
        {col:5, name:'Control'}
      ],
      selectedRowCode: null,
      clickOnRow: false,
    };
  },

  rowNumSelected: function(code) {
    console.log( 'выбрана строка # '+code + ', сейчас флаг подсветки был ' + this.state.clickOnRow);
    this.setState( {clickOnRow:(this.state.selectedRowCode!=code || !this.state.clickOnRow), selectedRowCode:code} );
  },

  deleteRow: function(code) {
    console.log( 'будет удалена строка # '+code );
    
    this.setState( {arrGoods: this.state.arrGoods.filter(el => {return el.code!=code})} );
  },
  
  render: function() {

    var self=this;

    var rowsArr=self.state.arrGoods.map( function( item ) {
      return React.createElement( Goods, {key:item.code,
        name:item.name,
        price:item.price,
        url:item.url,
        code:item.code,
        count:item.count,
        cbSelected: self.rowNumSelected,
        cbDeleted: self.deleteRow,
        isSelectRow: (self.state.selectedRowCode==item.code && self.state.clickOnRow),
      });
    });

    return React.DOM.div( {className:'IShop'},
      React.DOM.h1( {}, self.props.shopName ),
      React.DOM.div( {className:'Table'},
        React.createElement( TableHeader, {colnames:self.state.colnames}),
        rowsArr ),
    );
  },
});
