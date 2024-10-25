var wateringPlants = function(plants, initialCapacity) {
    let capacity = initialCapacity
    let steps = 0
    for(let i=0; i < plants.length; i++){
        if(capacity < plants[i]){
            steps += i*2
            capacity = initialCapacity
        }
        capacity -= plants[i]
        steps++
    }
    return steps
};