import mongoose from "mongoose";
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connect To Db succufuly");


    } catch (error) {
        console.log("Connect To Db Faild", error);
    }
}
export default connectToDb