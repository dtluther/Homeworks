# Exercise 1 - Stack

class Stack

  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
    el
  end

  def remove
    @stack.pop
  end

  def show
    @stack.dup
  end
end

# if __FILE__ == $PROGRAM_NAME
#   stack = Stack.new
#   stack.add(3)
#   stack.add(2)
#   stack.add(7)
#   p stack.show
#   stack.remove
#   p stack.show
#   stack.add(1)
#   stack.add(5)
#   p stack.show
# end

class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
    el
  end

  def dequeue
    @queue.shift(el)
  end

  def show
    @queue.dup
  end

end

if $__FILE__ == $PROGRAM_NAME
  queue = Queue.new
  queue.enqueue(1)
  queue.enqueue(2)
  p queue.show
  queue.dequeue
  p queue.show
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(5)
  p queue.show
  queue.dequeue
  p queue.show
end
