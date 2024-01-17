class Game < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true 
  validates :genre, presence: true

  def avg_rating
    self.reviews.map { |review| review.rating }.sum / self.reviews.length.to_f
  end
end
