import React, { forwardRef } from "react";
import galleryitems from "./GallerItems";
import "./gallery.scss";

const Sequence = () => {

    return (
        <div className="imagescontent">
            {galleryitems.map((item, i) => (
                <div className="listItem" key={i}>
                    <img src={`${item.image}`} alt='' />
                </div>
            ))}
        </div>
    )
};

export default Sequence;
