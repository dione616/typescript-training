class Node {
  next: Node | null = null
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null

  //add Node to List
  add(data: number): void {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = node //add Node at the end
  }
  //length
  get length(): number {
    if (!this.head) {
      return 0
    }
    let length = 1
    let node = this.head
    while (node?.next) {
      node = node.next
      length++
    }
    return length
  }
  //get Node by index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('No head Node!')
    }
    let counter = 0
    let node: Node | null = this.head
    while (node.next) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    throw new Error('Out of bounds')
  }
  //compare node values
  compare(left: number, right: number): boolean {
    if (!this.head) {
      throw new Error('No head Node')
    }
    return this.at(left).data > this.at(right).data
  }
  //swap
  swap(left: number, right: number): void {
    let leftNode = this.at(left)
    let rightNode = this.at(right)

    let leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }
  //print
  print(): void {
    if (!this.head) {
      return
    }
    let node: Node | null = this.head
    while (node) {
      console.log(node)
      node = node.next
    }
  }
}
