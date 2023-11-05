import React from "react";
export const Bags = ({formData}) => {

        let bags;

        if(formData.bags === '1') {
          bags = <span>worek</span>
        } else if ( formData.bags === '5') {
            bags = <span>worków</span>
        } else {
            bags = <span>worki</span>
        }

        return bags
}