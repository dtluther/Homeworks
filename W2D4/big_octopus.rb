
fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# Sluggish Octopus, O(n^2)
def quadratic_biggest_fish(fishes)
  fishes.each_with_index do |fish1, i1|
    max_length = true

    fishes.each_with_index do |fish2, i2|
      next if i1 == i2
      max_length = false if fish2.length > fish1.length
    end

    return fish1 if max_length
  end

end

# Dominant Octopus, O(n log n)
class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return self if count <= 1

    midpoint = count / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left)
    merged.concat(right)

    merged
  end
end

def nlogn_biggest_fish(fishes)
  # sort the array longest to shortest
  prc = Proc.new { |x, y| x.length <=> y.length }
  #return the first element
  fishes.merge_sort(&prc).last
end

# Clever Octopus, O(n)
def linear_biggest_fish(fishes)
  biggest = fishes[0]

  fishes[1..-1].each do |fish|
    biggest = fish if fish.length > biggest.length
  end

  biggest
end

# Slow Dance
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dance(tile_location, tiles_array)
  tiles_array.each do |tile|
    return tiles_array.index(tile) if tile == tile_location
  end
end

indices = %w(0 1 2 3 4 5 6 7)
tiles_hash = Hash[tiles_array.zip(indices)]
def constant_dance(tile_location, new_data_structure)
  new_data_structure[tile_location]
end
