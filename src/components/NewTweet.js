import React, { Component } from 'react';

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleText = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text: text,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // todo: Add Tweet to Store
    console.log('New Tweet: ', this.state.text);
    this.setState(() => ({
      text: '',
    }));
  };
  render() {
    const { text } = this.state;
    // todo: Redirect to Home if submitted
    const textLeft = 250 - text.length;
    return (
      <div>
        <h3 className='center'>Write New Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            value={text}
            onChange={this.handleText}
            placeholder="What's happening ?"
            className='textarea'
            maxLength={250}
          />
          <div className='tweet-length'>{textLeft}</div>
          <button className='btn' type='submit' disabled={!this.state.text}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTweet;
