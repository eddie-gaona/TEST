export const setAmplitudeUserId = {userId} => {
	if (userId) {
		utils.log.debug("setting amplitude user id..", userId);
		amplitude.getInstance().setUserId(userId);
	} else {
		utils.log.error("no user id found when setting amplitude user id");
	}
};



//Set user id at the time of the instance

export const initAmplitude = {} => {
	amplitude.getInstance().init(proccess,env.REACT_APP_AMPLITUDE, userId);
};