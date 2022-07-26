import React, { forwardRef } from "react";
import galleryitems from "../GallerItems";
import "./gallery.scss";

const Sequence = () => {

    return (
        <div className="imagescontent">
            {galleryitems.map((item, i) => (
                <div className="listItem"  data-aos="fade-up"  data-aos-delay="300" key={i}>
                    <img src={`${item.image}`} alt='' />
                </div>
            ))}
        </div>
    )
};

export default Sequence;
