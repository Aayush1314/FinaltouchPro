import React from 'react'
import "../style/images.css"

var View = (props) => {
    const images = props.images.map(({desciption, id, src}) =>{
        return (
                <div className="col-md-3 col-xs-12 col-s-12">
                    <a href={src} data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                        <img src={src} class="img-fluid rounded w-100 mx-auto d-block" />
                    </a>
                </div>
            )     
    })
    return(

        <div className="row">
            {images}
        </div>
    )
}

export default View
