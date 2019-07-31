import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UrlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {longUrl: ''};
        this.endpoint = 'http://localhost:5000/api/url/shorten';
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({longUrl: event.target.value});
    }
  
    async handleSubmit(event) {
        event.preventDefault();
        let response_html;
        try {
            let res = await axios.post(this.endpoint, {longUrl: this.state.longUrl});
            response_html =<span className="text-success"><a href={res.data.shortUrl} target="_blank">{res.data.shortUrl}</a></span>;
        } catch (error) {
            response_html = <span className="text-danger">Invalid URL!</span>;
        }
        ReactDOM.render(response_html, document.getElementById('url_response'));
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> URL: <input type="text" value={this.state.longUrl} onChange={this.handleChange} /></label>
                <input type="submit" value="Submit" />
                <hr/>
                <span id="url_response"></span>
            </form>
        );
    }
}

export default UrlForm;