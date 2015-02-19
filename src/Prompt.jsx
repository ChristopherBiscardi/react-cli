var React = require('react');

var styles = {
    resize: 'none',
    outline: 'none',
    border: 'none',
    background: '#0f1421',
    fontFamily: '"Courier New", Courier, monospace',
    color: 'white',
    fontSize: '14px'
}

var Prompt = React.createClass({
    displayName: 'Prompt',
    getInitialState: function(){
        return { value: '' }
    },
    onSubmit: function(e){
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value:''})
    },
    handleChange: function(e){
        this.setState({
            value: e.target.value.slice(0,100)
        })
    },
    onKeyDown: function(e){
        if(e.keyCode == 13){
            this.onSubmit(e);
        }
    },
    focusInput:function(){

        this.refs['prompt'].getDOMNode().focus()
    },
  render: function(){
      return <form onSubmit={this.onSubmit}>
      <textarea style={styles}
      value={this.state.value}
      onChange={this.handleChange}
      rows={1}
      cols={110}
      onKeyDown={this.onKeyDown}
      autoFocus={true}
      ref={'prompt'}
      />
      </form>
  }
})

module.exports = Prompt;