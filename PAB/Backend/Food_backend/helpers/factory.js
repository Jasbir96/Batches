function createElement(elementModel) {
    return async function (req, res) {
        try {
            let element = await elementModel.create(req.body);
            res.status(200).json({
                element: element
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Server error"
            });
        }
    }
}
function deleteElement(elementModel) {
    return async function deleteelement(req, res) {
        let { id } = req.params;
        try {
            let element = await elementModel.findByIdAndDelete(id);
            res.status(200).json({
                element: element
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Server error"
            });
        }
    }
}
function getElement(elementModel) {
    return async function (req, res) {
        let { id } = req.params
        try {
            let users = await elementModel.findById(id);
            res.status(200).json({
                "message": users
            })
        } catch (err) {
            res.status(502).json({
                message: err.message
            })
        }
    }
}
function getElements(elementModel) {
    return async function (req, res) {
        try {
            let requestPromise;
            // query
            if (req.query.myQuery) {
                requestPromise = elementModel.find(req.query.myQuery);
            } else {
                requestPromise = elementModel.find();
            }
            // sort
            
            if (req.query.sort) {
                requestPromise = requestPromise.sort(req.query.sort)
            }
            // select
            if (req.query.select) {
                let params = req.query.select.split("%").join(" ");
             requestPromise = requestPromise.select(params);
            }
            // paginate 
            let page = Number(req.query.page) || 1;
            let limit = Number(req.query.limit) || 4;
            let toSkip = (page - 1) * limit;
            requestPromise = requestPromise
                .skip(toSkip)
                .limit(limit);
            let elements = await requestPromise;
            res.status(200).json({
                "message": elements
            })
        } catch (err) {
            res.status(502).json({
                message: err.message
            })
        }
    }
}
function updateElement(elementModel) {
    return async function updateElement(req, res) {
        let { id } = req.params;
        try {
            // user model -> check 
            // plan -> if -> fail
            if (req.body.password || req.body.confirmPassword) {
                return res.json({
                    message: "use forget password instead"
                })
            }
            let element = await elementModel.findById(id);
            console.log("60", element)
            if (element) {
                for (let key in req.body) {
                    element[key] = req.body[key];
                }
                // save -> confirm ,password
                await element.save({
                    validateBeforeSave: false
                });
                res.status(200).json({
                    element: element
                });
            } else {
                res.status(404).json({
                    message: "element not found"
                })
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Server error"
            });
        }
    }
}
module.exports.createElement = createElement;
module.exports.deleteElement = deleteElement;
module.exports.updateElement = updateElement;
module.exports.getElements = getElements;
module.exports.getElement = getElement;
