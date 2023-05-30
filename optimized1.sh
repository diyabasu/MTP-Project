for i in {1..10}; do sed "s/mypodII/podII-$i/g" mypod2.yaml | kubectl apply -f - ; done
