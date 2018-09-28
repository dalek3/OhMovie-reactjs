import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: '',
        messagea: ''
    }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            // message: e.target.value,
            // [] 안에 있는 값을 key값으로 사용하는 것이다.
            // 그러나 괄호가 없다면 오류가 발생한다.
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeypress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }
    
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.messagea}
                    onChange={
                        (e) => {
                            this.setState({
                                messagea: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.messagea)
                        this.setState({
                            messagea: ''
                        });
                    }
                }>확인</button>

                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeypress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;