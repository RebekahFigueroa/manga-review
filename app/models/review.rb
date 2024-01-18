class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :review_text, presence: true
  validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }

  def username
    self.user.username
  end

  def genres
    self.game.genre
  end

  def image_url
    self.game.image_url
  end
end
