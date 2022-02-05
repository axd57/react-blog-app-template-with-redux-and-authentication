import React, { Component } from 'react'

export default class BlogForm extends Component {
    //Dışarıdan propsa veri verildiğinde kullana bilmek için yapılır.
    constructor(props){
        super(props);
        
        this.state = {
            title: props.blog ? props.blog.title: "",
            description: props.blog ? props.blog.description: "",
            error: ""
        }
    }
    
    
    state = {
        title: "",
        description: "",
        error: ""
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    }

    onDescritiopnChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if(!this.state.title || !this.state.description){
            this.setState(() => ({error: "Missing field"}));
        }
        else{
            this.setState(() => ({error: ""}));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now()
            });
        }
    }
    
    render() {
        return (
            <div> {/* && nin solundaki kısım null değilse sağındaki kısım çalışıyor*/}
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <input placeholder='Enter title' value={this.state.title} onChange={this.onTitleChange}/>
                    </div>

                    <div>
                        <textarea placeholder='Enter description' value={this.state.description} onChange={this.onDescritiopnChange}></textarea>
                    </div>
                    <div>
                        <button type='submit'>Save changes</button>
                    </div>
                </form>
            </div>
        )
    }
}
