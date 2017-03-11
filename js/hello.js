import React from 'react';

  var Input = React.createClass({
      getInitialState: function() {
        return {value: ''};
      },
      handleChange: function(event) {
        this.setState({value: event.target.value});
     },
    render: function () {
       var value = this.state.value;
       var myStyle={
        width:'500px',
        height:'50px',
        fontSize:25,
        backgroundColor:'#ccc'
       };
       return (
         <div>
           <input type="text" value={value} style={myStyle} onChange={this.handleChange} />
           <h1>I will repeat the input:{value}</h1>
         </div>
       );
    }
});

export default Input;