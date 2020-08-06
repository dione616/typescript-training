import { Sorter } from './Sorter'
import { Numbers } from './Numbers'
import { Characters } from './Characters'
import { LinkedList } from './LinkedList'

const chars = new Characters('GassOxzy')

chars.sort()
console.log(chars.data)

const list = new LinkedList()
list.add(599)
list.add(11)
list.add(-5)
list.add(2222)

list.sort()

list.print()
