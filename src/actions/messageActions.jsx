import apiCaller from "../apiConnector"
import { setMessageSendSuccess } from "../slices/ChatUser"


export const savemessage = async (data,dispatch) => {
        try {
            const axiosResult = await apiCaller('POST', '/api/messenger/savemessage', data)
            dispatch(setMessageSendSuccess(axiosResult.data.data))
            return axiosResult;

        } catch (err) {
            console.log(err)
            return err
        }
}