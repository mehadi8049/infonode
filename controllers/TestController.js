class TestController{
    headers = async () => {
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: globals.get('id_token'),
            'x-app-key': process.env.bkash_api_key,
        }
    }
    index = async (req, res, next) => {
        try {
            const docs = {'name':'Mehadi Hasan'};
            return res.status(404).json(docs);
        } catch (error) {
            return res.status(401).json({ error: error.message })

        }
    };
}

module.exports=new TestController();