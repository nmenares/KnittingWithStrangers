json.areas do
  @areas.each do |area|
    json.set! area.id do
      json.partial! 'area', area: @area
    end
  end
end

json.knitting_times do
  @areas.each do |area|
    area.knitting_times.each do |knitting_time|
      json.set! knitting_time.id do
        json.partial! 'api/knitting_times/knitting_time', knitting_time: knitting_time
      end
    end
  end
end
