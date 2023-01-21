import { Helmet } from 'react-helmet';

import React from 'react';

const Script = () => {
    return (
        <>
            <Helmet>
                <script
                    type='text/javascript'
                    async='async'
                    defer='defer'
                    charset='UTF-8'
                    src='https://timepad.ru/js/tpwf/loader/min/loader.js'
                    data-timepad-customized='216367'
                    data-timepad-apidomain='timepad.ru'
                    data-timepad-widget-v2='event_list3'></script>
            </Helmet>
        </>
    );
};

export default Script;
