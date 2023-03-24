import React from 'react'
import GoogleAd from "./GoogleAd";
import { Adsense } from '@ctrl/react-adsense';

export default function Eg() {
    return (
        <div>
            hi
            {/* <GoogleAd slot="6439554681" googleAdId="ca-pub-2178006875471084" /> */}
            <Adsense
                client="ca-pub-2178006875471084"
                slot="6439554681"
                style={{ display: 'block' }}
                layout="in-article"
                format="fluid"
                data-adtest="on"
            />
        </div>
    )
}
