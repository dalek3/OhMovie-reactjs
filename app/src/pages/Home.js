import React, { Component } from 'react';


// const Home = ({history}) => {
    // const unblock = history.block('정말로 떠나시겠습니까?');
    
    // 막는 작업을 취소할 때
    // unblock();
class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }
    render() {
        return (
            <div>
                <h2>홈</h2>
                <button onClick={() => {
                    //history.push('about/javascript')
                }}>자바스크립트를 사용하여 이동</button>
                <p>{this.state.number}</p>
                <button onClick={() => {
                this.setState({
                    number: this.state.number + 1
                })
                }}>더하기</button>


            </div>
        );
    }
};

export default Home;