import React,{Component} from 'react';

export default class Hello extends Component {

  changeHandler(e){
    //console.log(e.target.value);
    this.props.onXChange(e.target.value);
  }
    render() {
        return (
          <div>
            <h1>Hello {this.props.msg}!</h1>
            <input onChange={this.changeHandler.bind(this)} />
          </div>
        );
      }

}
