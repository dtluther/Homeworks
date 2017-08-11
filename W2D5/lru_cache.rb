class LRUCache
  attr_reader :max_size

  def initialize(max_size)
    @cache = []
    @max_size = max_size
  end

  def count
    @cache.size
  end

  def add(el)
    if included?(el)
      reload(el)
    elsif @cache.size >= @max_size
      eject
      @cache << el
    else
      @cache << el
    end
  end

  def show
    p @cache
  end

  private
  def included?(el)
    @cache.include?(el)
  end

  def reload(el)
    @cache.delete(el)
    @cache << el
  end

  def eject
    @cache.shift
  end
end

johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.show
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})


  johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
