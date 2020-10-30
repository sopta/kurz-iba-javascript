import { format, formatDistance, formatRelative, subDays } from 'date-fns'

/*
console.log("zprava")
console.log(prom)
console.log(obj)

pozdrav()*/


console.log(format(new Date(), "'Today is a' iiii"))
//=> "Today is a Friday"

console.log(formatDistance(subDays(new Date(), 3), new Date()))
//=> "3 days ago"

console.log(formatRelative(subDays(new Date(), 3), new Date()))
//=> "last Friday at 7:26 p.m."
