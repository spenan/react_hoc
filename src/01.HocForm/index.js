import React, { Component } from 'react';


const BorderDiv = Cmp => props => {
    return (
        <div className='border'>
            <Cmp {...props} />
        </div>

    )
}

@BorderDiv
@BorderDiv
class Hoccomponetn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input placeholder='请输入描述' />
            </div>
        );
    }
}
export default Hoccomponetn;