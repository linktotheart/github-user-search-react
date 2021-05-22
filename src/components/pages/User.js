import React, { Component } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.login)
    }
    render() {
        const {name, avatar, url, location, bio, blog, login, html_url,
             followers, following, public_repos, public_gist, hireable }
              = this.props.user;

        const {loading} = this.props;
        
        return (
            <div className="container col-xl-8 col-lg-9">
                {name} 
            </div>
        )
    }
}

export default User
