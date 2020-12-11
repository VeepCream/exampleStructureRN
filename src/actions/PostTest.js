import Config from 'react-native-config';

import API from '../libs/Api';

export default () => {
    return new Promise((resolve, reject) => {
        API("test",
            {
                data: {
                    test: ""
                }
            })
            .then(result => {
                resolve(result);
            })
            .catch(ex => {
                console.log("ex", ex);

                reject(ex);
            });
    })

};