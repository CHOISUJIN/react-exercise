import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        "message":'',
        "username":''
    }

    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick() {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message : '',
            username : ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key ==='Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* 이벤트를 스크립트 코드로 전달하는 방법
                 <input type="text"
                       name ="message"
                       placeholder="아무거나 입력하세요"
                       onChange={(e) => {
                            this.setState({
                                message:e.target.value
                            })
                        }}/>
                <button onClick={() => {
                    alert(this.state.message);
                    this.setState({
                        message: ''
                    });
                }}>
                확인
                </button> */}

                {/* 이벤트 함수로 전달하기 */}
                <input type="text"
                       name ="username"
                       placeholder="유저명"
                       value={this.state.username}
                       onChange={this.handleChange}/>
                <input type="text"
                       name ="message"
                       placeholder="아무거나 입력하세요"
                       value={this.state.message}
                       onChange={this.handleChange}
                       onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>
                확인
                </button>
            </div>
        );
    }
}

export default EventPractice;