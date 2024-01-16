class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :review_text, presence: true
  validates :rating, presence: true

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
