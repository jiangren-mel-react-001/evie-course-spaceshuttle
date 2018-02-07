import React from 'react';

export default (props) => (
    <div className="col col-lg-4 col-md-6 col-sm-8">
        <img src={props.item.image} alt={props.item.name} className="img-responsive"/>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <button className="btn btn-primary" onClick={() => props.onDetail(props.item)}>
            Detail
        </button>
    </div>
);