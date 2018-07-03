// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name) 
  })
}

const logDriversByHomtown = function(drivers, location){
  drivers.forEach(function(driver){
    console.log(driver.hometown === location ? driver.hometwon : nil)
  })
}