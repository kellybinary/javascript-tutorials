// Write the code to pass the test
function street(pedestrian) {
    return () => {
        const moves = ['right', 'left'];
        if (JSON.stringify(moves) === JSON.stringify(pedestrian())) {
            return true;
        } 
        throw new Error('/kill/');
    }
}

export default street;