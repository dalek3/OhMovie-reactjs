import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// withRouter를 사용하여 해당 props에 접근할 수 있습니다.
// Menu 컴포넌트는 라우트 외부에 있기 때문에 history, location, mathch 등 값을
// 사용할 수 없습니다.(props)

class MenuBar extends Component{
  
    render() {
        return (
            <div style={{ marginBottom: '5em' }}>
                <ul>
                    <li header>Ohmovie</li>
                    <li 
                        as={NavLink} 
                        exact to="/"
                    >
                        홈
                    </li>
                    <li 
                        as={NavLink} 
                        exact to="/posts"
                    >
                        카테고리
                    </li>
                    <li 
                        as={NavLink} 
                        exact to="/about/react"
                    >
                        평가하기
                    </li>
                    {/* <li>
                        <Input icon='search' placeholder='Search...' />
                    </li>
                    <li>
                        <Button>로그인</Button>
                    </li>
                    <li>
                        <Button>회원가입</Button>
                    </li> */}
                    <li>
                        보고싶어요
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(MenuBar);
// export default Menu;