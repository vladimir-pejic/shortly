import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UrlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {longUrl: ''};
        this.endpoint = '/api/url/shorten';
  
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
            response_html = <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1">
                        <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold">Success! Here is your shortened URL:</p>
                        <p className="text-sm font-bold"><a href={res.data.shortUrl} target="_blank">{res.data.shortUrl}</a></p>
                    </div>
                </div>
            </div>;
        } catch (error) {
            response_html = <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1">
                        <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold">Error! Invalid URL!</p>
                    </div>
                </div>
            </div>;
        }
        ReactDOM.render(response_html, document.getElementById('url_response'));
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="bg-transparent rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input 
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                        type="text" 
                        style={{opacity: 1 + 'px !important'}} 
                        value={this.state.longUrl} 
                        onChange={this.handleChange}
                        placeholder="Enter your URL"
                      />
                </div>
                <div className="mb-4">
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" style={{opacity: 1 + 'px !important'}} type="submit" value="Submit" />
                </div>
                <div className="mb-4" id="url_response">
                  
                </div>
            </form>
        );
    }
}

export default UrlForm;