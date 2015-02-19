var React = require('react');
var Prompt = require('./Prompt.jsx');
var Output = require('./Output');

console.log(Prompt)

var CLI = React.createClass({
  displayName: 'CLI',
  getInitialState: function(){
    return {
      lines:[]
    }
  },
    getDefaultProps: function(){
        return {
            columns: 80,
            rows: 25
        }
    },
    onSubmitPrompt: function(val){
        switch(val){
        case 'docker':
            this.printHelp();
            break;

        case 'docker -h':
            this.printHelp();
            break;

        default:
            this.printUnsupported(val);
        }
    },
    printHelp: function(){
    },
    printUnsupported: function(cmd){
        console.log('unsup', this.state.lines);
        this.setState({
            lines: this.state.lines.concat('command not found: ' + cmd)
        })
    },
    onFocus: function(){
        this.refs['prompty'].focusInput();
    },
    render: function(){
        var lines;
        if(this.state.lines.length <= 24){
            lines = this.state.lines;
        }else{
            lines = this.state.lines.slice(this.state.lines.length-25, this.state.lines.length);
        }
      return <div>
      <Output lines={lines} onFocus={this.onFocus} />
      <Prompt onSubmit={this.onSubmitPrompt} ref={'prompty'}/>
      </div>
  }
})



module.exports = CLI;