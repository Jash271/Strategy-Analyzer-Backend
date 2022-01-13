const Jobs = require('../models/jobs');
const User = require('../models/users');

exports.CreateJob = async (req, res,next) => {
    const {job,name} = req.body;
    try {
        const new_job = await Jobs.create({
            user_id: req.user.id,
            status: false,
            job,
            name,
            pending: true
        });
        return res.status(201).json({
            msg: 'Successfully Created Job',
            success: true,
            data: new_job
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};

exports.UpdateJobResult = async (req, res,next) => {
    const {result,j_id} = req.body;
    try {
        const updated_job = await Jobs.findByIdAndUpdate(j_id, {
            result,
            status: true
        },
        {
            new: true,
            runValidators: true
        });
        return res.status(200).json({
            msg: 'Successfully Updated Job',
            success: true,
            data: updated_job
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}

exports.GetMyRuns = async (req, res,next) => {
    try {
        const my_jobs = await Jobs.find({
            user_id: req.user.id,
            
        });
        return res.status(200).json({
            msg: 'Successfully Fetched Jobs',
            success: true,
            data: my_jobs
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}
    
