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

var Output = React.createClass({
    displayName: 'Output',
    getDefaultProps: function(){
        lines: []
    },
    render: function(){
        console.log(this.props.lines)
        return <textarea value={this.props.lines.join('\n')}
        style={styles}
        rows={25}
        cols={110}
        onFocus={this.props.onFocus}/>
  }
})

module.exports = Output;