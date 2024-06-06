const formValidator = (req, res, next) => {
    const {firstname, name, email, message} = req.body;

    let errors = [];

    if (!name || name.trim().length === 0) {
        errors.push('Name is a required field and was not filled in');
    }
    if (!firstname || firstname.trim().length === 0) {
        errors.push('Firstname is a required field and was not filled in');
    }
    if (!email || !email.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        errors.push(`Email is a required field and must be in this template: name@example.com`);
    }
    if (!message || message.trim().length === 0) {
        errors.push('Message is a required field and was not filled in');
    }

    if (errors.length > 0) {
        return res.status(400).json({
            status: 'error',
            message: errors
        });
    }
    next();
}