import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'react-uuid';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';

import { getItems, deleteItem } from './../actions/itemActions';

// const id = uuid();


class ShopppingList extends Component {
    // state = {
    //     items: [
    //         { id: uuid(), name: 'Eggs' },
    //         { id: uuid(), name: 'Milk' },
    //         { id: uuid(), name: 'Bread' },
    //         { id: uuid(), name: 'Fruits' }        
    //     ]
    // }

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        console.log(this.props.item);
        // const { items } = this.state;
        const { items } = this.props.item;
        return (
            <Container>
                {/* <Button 
                    color="dark" 
                    style={{marginBotton: '2rem'}} 
                    onClick={() => {
                        const name = prompt('Enter item');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, { id: id, name }]
                            }));
                        }
                }}>Add Item</Button> */}

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {/* {items.map(({ id, name }) => ( */}
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        // onClick={() => {
                                        //     this.setState(state => ({
                                        //         items: state.items.filter(item => item.id !== id)
                                        //     }))
                                        // }}
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShopppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(
  ShopppingList
);
