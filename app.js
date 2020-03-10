const request = require('request-promise');
const hook = "write-your-hook-code";

(async function () {
    try {
        const slackBody = {
            text: `<!here> write your message`
        };

        const res = await request({
            url: `https://hooks.slack.com/services/${hook}`,
            method: 'POST',
            body: JSON.stringify(slackBody)
        });
        console.log(res);
    } catch(e) {
        console.log('error message', e);
    };
})();