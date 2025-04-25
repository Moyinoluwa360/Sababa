export const contactAction = async ({request})=>{
    console.log(request)
    const data = await request.formData()
    const submission = {
        name : data.get("name"),
        email : data.get("email"),
        subject : data.get("subject"),
        messsage : data.get("message"),
        privacyCheck : data.get("privacyAccepted")
    }

    console.log(submission)
}