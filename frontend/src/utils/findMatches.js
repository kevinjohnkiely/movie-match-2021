const findMatches = (myLikesArray, allLikesObj) => {

    const resultArray = []
    
    allLikesObj.forEach(likeObj => {

        const theObj = {}

        let counter = 0
        myLikesArray.forEach(like => {
            
            if(likeObj.likes.includes(like)) {
                counter++
                theObj.name = likeObj.name
                theObj.amt = counter
            }
        })

        resultArray.push(theObj)
    });

    return resultArray
    
}

export default findMatches