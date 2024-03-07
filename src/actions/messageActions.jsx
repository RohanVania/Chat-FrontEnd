import apiCaller from "../apiConnector"


export const savemessage = async (data) => {
        try {
            console.log("hello",data)
            const axiosResult = await apiCaller('POST', '/api/messenger/savemessage', data)
            // console.log(axiosResult);
            return axiosResult;

        } catch (err) {
            console.log(err)
            return err
        }
}