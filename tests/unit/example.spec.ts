import {shallowMount} from '@vue/test-utils';
import DotsLineChartComponent from '@/components/DotsLineChartComponent.vue';

describe('DotsLineChartComponent.vue', () => {
  it('renders props.count when passed', () => {
    const count = 5;
    const wrapper = shallowMount(DotsLineChartComponent, {
      props: {count}
    }).get('button');
    expect(wrapper.text()).toMatch(`Count: ${count}`);
  });
});
