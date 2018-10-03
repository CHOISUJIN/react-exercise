import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name:'기본 이름',
        age:27
    }

    static propTypes = {
        name:PropTypes.string, // name props 타입을 문자열로 설정함.
        age:PropTypes.number.isRequired
    }

    state = {
        number:0
    }

    // state를 constructor에서 사용할 때
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number:0
    //     }
    // }

    render() {
        return (
            <div>
                <p>안녕하세요. 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다. </p>
                <p>숫자:{this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number:this.state.number +1
                    })
                }}>
                더하기</button>
            </div>
            
        )
    }
}

export default MyComponent;
